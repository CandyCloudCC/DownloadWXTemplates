import axios, { AxiosRequestConfig } from 'axios';
import cheerio from 'cheerio';

import { cookie, token } from '../config';

export async function getTemplateList(begin: number) {
  let axiosConfig: AxiosRequestConfig = {
    url: `https://mp.weixin.qq.com/advanced/tmplmsg`,
    method: 'GET',
    headers: {
      accept: `*/*`,
      'accept-encoding': `gzip, deflate, br`,
      'accept-language': `zh-CN,zh;q=0.9,en;q=0.8`,
      cookie: cookie,
      referer: `https://mp.weixin.qq.com/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store&lang=zh_CN&token=${token}`,
      'sec-fetch-mode': `cors`,
      'sec-fetch-site': `same-origin`,
      'user-agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36`,
      'x-requested-with': `XMLHttpRequest`
    },
    params: {
      begin: begin,
      count: 20,
      keyword: '',
      action: 'tmpl_store',
      token: '306674206',
      lang: 'zh_CN',
      f: 'json',
      ajax: 1
    }
  };

  let rst = await axios.request(axiosConfig);
  return rst.data;
}

export async function getTemplateDateil(id: string) {
  let axiosConfig: AxiosRequestConfig = {
    url: `https://mp.weixin.qq.com/advanced/tmplmsg`,
    method: 'GET',
    headers: {
      Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9`,
      'Accept-Encoding': `gzip, deflate, br`,
      'Accept-Language': `zh-CN,zh;q=0.9,en;q=0.8`,
      'Cache-Control': `max-age=0`,
      Connection: `keep-alive`,
      cookie: cookie,
      Host: `mp.weixin.qq.com`,
      Referer: `https://mp.weixin.qq.com/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store&lang=zh_CN&token=${token}`,
      'Sec-Fetch-Mode': `navigate`,
      'Sec-Fetch-Site': `same-origin`,
      'Sec-Fetch-User': `?1`,
      'Upgrade-Insecure-Requests': `1`,
      'User-Agent': `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36`
    },
    params: {
      action: 'tmpl_preview',
      t: 'tmplmsg/preview',
      id: id,
      token: token,
      lang: 'zh_CN'
    }
  };

  let rst = await axios.request(axiosConfig);
  let content = cheerio.load(rst.data, { decodeEntities: false });
  let scriptArray = Array.from(content('script'));
  let theScript = scriptArray.find(x => {
    if (String(x.attribs.src || '').trim().length > 0 || x.attribs.type !== 'text/javascript') {
      return false;
    }

    let innerText = getInnerText(x);
    let matches = innerText.trim().match(/wx\.cgiData\s*=\s*\{[\s\S]*seajs\.use\(?/gim);
    return matches;
  });

  if (!theScript) {
    return undefined;
  }

  let innerText = getInnerText(theScript);
  let matche = innerText.trim().match(/([\s\S]*)seajs\.use\(/im);
  if (!matche) {
    return undefined;
  }
  let script = matche[1].trim();
  var wx: any = {};
  eval(script);
  return wx.cgiData.tmplmsg;
}

function getInnerText(doc: CheerioElement) {
  let innerText = doc.children
    .filter(x => x.data)
    .map(x => x.data)
    .join('')
    .trim();

  return innerText;
}
