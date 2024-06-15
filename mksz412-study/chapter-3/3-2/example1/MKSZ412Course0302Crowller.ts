// `superagent` 这个库是 JS 写的，而我们是 TS 文件。所以系统不知道库里面的东西是什么。下面这行会报错。
// 所以需要一个翻译文件 `.d.ts` 文件。TS 会先读取这个翻译文件，帮助 TS 理解 JS 的内容。
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';
import MKSZ412Course0305Example1Analyzer from '../../3-5/example1/MKSZ412Course0305Example1Analyzer';

class MKSZ412Course0302Crowller {
  private secret: string = 'secretKey';
  private url: string = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;

  private filePath: string = path.resolve(__dirname, './data/course.json');

  async getRawHtml(): Promise<string> {
    const result: superagent.Response = await superagent.get(this.url);
    return result.text;
  }

  writeFile(content: string): void {
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess(): Promise<void> {
    const html: string = await this.getRawHtml();
    const fileContent: string = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private analyzer: MKSZ412Course0305Example1Analyzer) {
    this.initSpiderProcess().then(_ => {})
  }
}

const analyzer: MKSZ412Course0305Example1Analyzer = new MKSZ412Course0305Example1Analyzer();
new MKSZ412Course0302Crowller(analyzer);
