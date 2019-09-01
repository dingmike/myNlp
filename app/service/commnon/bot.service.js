// const { ActivityTypes } = require('botbuilder');
const {Recognizer, NlpManager, ConversationContext} = require('node-nlp');  // Nlg, Nlu, Nlp   Nlg生成自然語言
//NLU 自然语言理解（Natural Language Understanding，简称NLU）技术，涵盖领域非常广泛，包括句子检测，分词，词性标注，句法分析，文本分类/聚类，文字角度，信息抽取/自动摘要，机器翻译，自动问答，文本生成等多个领域。
const trainnlp = require('../../util/train-nlp');
const mysqlModel = require("../../mysqlModel"); // mysql数据model
// console.log(mysqlModel.Nlp)

class MyBot {
  constructor() {
    // this.recognizer = new Recognizer();
    this.nlpManager = new NlpManager({languages: ['en'], nlu: {log: true}});
    this.threshold = 10;
    this.context = new ConversationContext();
    // this.recognizer.nlpManager.addLanguage('en');
    // trainnlp(this.recognizer.nlpManager, console.log);
    // 训练模型
    // 拉去所有收集的话语集合
   /* mysqlModel.Nlp.fetchAll().then((model, columns, options) => {
      console.log('dfdfdf')
      console.log(model)
      console.log(columns)

      trainnlp(this.nlpManager, msg => {
        console.log(`say something ???${msg}`)
      }, columns);
    })  */

    mysqlModel.Nlp.query().then((columns) => {
      console.log('dfdfdf')
      console.log(columns)

      trainnlp(this.nlpManager, msg => {
        console.log(`say something ???${msg}`)
      }, columns);
    })
  }

  /*
  *  初始化训练NLP
   * @param {String}  =
  *
  * */
  async trainNlp() {

  }

  /*
  * 保存训练话语
   * @param {String} utterance =
   * @param {String} lang=
   * @param {String} agent=
   *
  * */
  async saveUtterance(params) {
    console.log(params)

    let doc =  await mysqlModel.Nlp.select('utterance').where({'utterance': params.utterance.trim()});
    console.log('是否存在此话语')
    console.log(doc)
    if(!doc) {
        mysqlModel.Nlp.forge({utterance: params.utterance.trim(), lang: params.lang, agent: params.agent}).save().then((res) => {
            console.log('保存训练话语成功')
            console.log(res)
        }).catch(err => {
            console.log(err)
        });

    }else {
      console.log('存在此话语')
    }




  }

  async onTurn(turnContext) {
    try {
      console.log(this.saveUtterance)
      /*  await trainnlp(this.nlpManager, msg => {
          console.log(`say something ???${msg}`)
        });*/
      /*  await trainnlp(this.nlpManager, msg => {
          console.log(`say something ???${msg}`)
        });*/
      // say('Say something!');
      // const result = await this.nlpManager.process(turnContext.msg);
      // await this.saveUtterance({utterance: '111'});


      const result = await this.nlpManager.process(turnContext.msg);
      // 保存训练话语，选择最精确的话语
      let params = {
        utterance: result.utterance,
        lang: result.locale,
        agent: result.classifications[0].label
      }
      await this.saveUtterance(params);
      console.log(result)
      const answer =
        result.score > this.threshold && result.answer
          ? result.answer
          : "Sorry, I don't understand";
      let sentiment = '';
      if (result.sentiment.score !== 0) {
        sentiment = `  ${result.sentiment.score > 0 ? ':)' : ':('}   (${
          result.sentiment.score
          })`;
      }
      // say();
      return result
      /* return {
         answer: answer,
         sentiment: sentiment // 情绪
       }*/
      // return `${answer}${sentiment}`
    } catch (ex) {
      console.log(ex)
      return 'Opps! there was an error recognizing!'
    }
  }
}

const myBot = new MyBot();

module.exports = myBot;
