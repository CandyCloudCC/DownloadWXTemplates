import fs from 'fs';
import path from 'path';
import moment from 'moment';
import { MapLike } from 'typescript';
import _ from 'lodash';

import { getTemplateList, getTemplateDateil } from './util';
import * as templateDataArray from '../data/list.20200110183127_pro';

async function main() {
  let dataArray: any[] = [];
  let getList = false;
  let getDetail = false;

  try {
    let pageNumber = 67;
    for (let i = 0; getList && i < pageNumber; i++) {
      let begin = 20 * i;
      let data = await getTemplateList(begin);
      dataArray.push(data);
    }
  } catch (err) {
    console.error(err);
    debugger;
  } finally {
    if (getList) {
      let filePath = path.join(__dirname, `../data/list.${moment().format('YYYYMMDDHHmmss')}.json`);
      fs.writeFileSync(filePath, JSON.stringify(dataArray, null, 2), { encoding: 'utf8' });
    }
  }

  let templateArray = templateDataArray.dataArray;
  try {
    for (let i = 0; getDetail && i < templateArray.length; i++) {
      let template = templateArray[i] as MapLike<any>;
      if (template.content && template.content.length > 0) {
        continue;
      }

      let rest = await getTemplateDateil(template.id);
      template.content = rest.content;
      template.example = rest.example;
      template.modify_time = rest.modify_time;
      template.person_used = rest.person_used;
    }
  } catch (err) {
    console.error(err);
    debugger;
  } finally {
    if (getDetail) {
      let filePath = path.join(__dirname, `../data/list.20200110183127_pro.ts`);
      let content = `export const dataArray = ${JSON.stringify(templateArray, null, 2)}`;
      fs.writeFileSync(filePath, content, { encoding: 'utf8' });
    }
  }

  let rst = _(templateArray)
    .map(x => {
      let fileds = x.content.split('}}').map(y => y.trim() + '}}');
      let matches = fileds.map(y => y.match(/([\s\S]+)：\{\{[\w\.]+\}\}/));
      let content = _.compact(matches).map(m => m[1]);
      return { id: x.id, t: x.title, c: _.orderBy(content, c => c).join(',') };
    })
    .orderBy(['t', 'c'])
    .filter(x => x.t.includes('账'))
    .value();

  console.log(rst);
  debugger;
}

main();
