import * as cheerio from 'cheerio';
import fs from 'fs';

interface MKSZ412Course0302Example1Course {
  title: string;
  count: number;
}

interface MKSZ412Course0302Example1CourseResult {
  time: number;
  data: MKSZ412Course0302Example1Course[];
}

interface MKSZ412Course0302Example1Content {
  [propsName: number]: MKSZ412Course0302Example1Course[];
}

export default class MKSZ412Course0305Example1Analyzer {

  private getJSONInfo(html: string): MKSZ412Course0302Example1CourseResult {
    const $: cheerio.CheerioAPI = cheerio.load(html);
    const courseItems: cheerio.Cheerio<cheerio.Element> = $('.course-item');
    const courseInfo: MKSZ412Course0302Example1Course[] = [];
    courseItems.map((_, element) => {
      const desc: cheerio.Cheerio<cheerio.Element> = $(element).find('.course-desc');
      const title: string = desc.eq(0).text();
      const count: number = parseInt(desc.eq(1).text().split('：')[1], 10);
      courseInfo.push({
        title, count
      });
    });
    return {
      time: (new Date()).getTime(),
      data: courseInfo,
    };
  }

   private generateJSONContent(courseInfo: MKSZ412Course0302Example1CourseResult, filePath: string): MKSZ412Course0302Example1Content {
    let fileContent: MKSZ412Course0302Example1Content = {};
    if (fs.existsSync(filePath)) {
      fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    fileContent[courseInfo.time] = courseInfo.data;
    return fileContent;
  }

  public analyze(html: string, filePath: string): string {
    const courseInfo: MKSZ412Course0302Example1CourseResult = this.getJSONInfo(html);
    const fileContent: MKSZ412Course0302Example1Content = this.generateJSONContent(courseInfo, filePath);
    return JSON.stringify(fileContent);
  }
}
