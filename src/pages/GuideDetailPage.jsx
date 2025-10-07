import React from 'react';
import { useParams, Link } from 'react-router-dom';

// 模拟指南详情数据
const GUIDE_DETAIL_DATA = [
  {
    id: '1',
    title: '简历制作指南',
    content: '简历是求职的第一步，一份优秀的简历能够让你在众多应聘者中脱颖而出。以下是制作高质量简历的关键步骤：\n\n1. **明确目标**：针对不同的职位，定制你的简历内容，突出与该职位相关的技能和经验。\n\n2. **格式清晰**：使用简洁的字体和适当的间距，确保简历易于阅读。保持一致的格式，包括日期、标题和项目符号。\n\n3. **突出重点**：将最重要的信息放在简历的前1/3部分，包括你的核心技能和最相关的工作经验。\n\n4. **量化成就**：使用具体的数据和结果来展示你的工作成绩，例如："增加销售额20%"或"优化流程提高效率30%"。\n\n5. **语言精炼**：使用有力的动词和简洁的语言，避免冗长的描述和无关信息。\n\n6. **检查错误**：仔细检查拼写、语法和格式错误，确保简历专业无误。\n\n记住，简历的目的是获得面试机会，而不是展示你的全部经历。专注于最相关、最有价值的信息，让招聘者对你产生兴趣。',
    publishedDate: '2023-06-15',
    readTime: '5 分钟'
  },
  {
    id: '2',
    title: '面试技巧大全',
    content: '面试是求职过程中至关重要的一环，充分的准备能够帮助你在面试中展现最佳状态。以下是一些实用的面试技巧：\n\n1. **提前准备**：研究应聘公司的背景、文化和职位要求，准备相关的问题和答案。\n\n2. **模拟练习**：与朋友或家人进行模拟面试，练习回答常见问题，提高自信和表达能力。\n\n3. **着装得体**：根据公司文化选择适当的面试服装，保持整洁、专业的形象。\n\n4. **准时到达**：提前规划路线，确保按时到达面试地点，最好提前10-15分钟到达。\n\n5. **积极倾听**：认真倾听面试官的问题，思考后再回答，避免打断对方。\n\n6. **展示热情**：表达你对公司和职位的兴趣，展现积极的工作态度和团队合作精神。\n\n7. **提出问题**：准备一些有深度的问题，展示你对公司和职位的了解和思考。\n\n8. **后续跟进**：面试结束后，发送感谢信表达感谢，并再次强调你对职位的兴趣。\n\n通过充分的准备和练习，你能够在面试中表现出色，增加获得录用的机会。',
    publishedDate: '2023-07-02',
    readTime: '6 分钟'
  },
  {
    id: '3',
    title: '薪资谈判策略',
    content: '薪资谈判是求职过程中的最后一步，也是许多人感到不舒适的环节。然而，掌握一些基本的谈判策略能够帮助你获得更公平的薪资待遇。以下是一些实用的薪资谈判技巧：\n\n1. **了解市场行情**：在谈判前，研究行业和职位的平均薪资水平，了解自己的市场价值。\n\n2. **明确底线**：确定你的最低可接受薪资，并考虑其他福利和发展机会。\n\n3. **等待对方先开口**：尽量让雇主先提出薪资范围，这样你可以根据他们的提议进行谈判。\n\n4. **强调你的价值**：基于你的技能、经验和成就，说明你为什么值得更高的薪资。\n\n5. **考虑整体薪酬**：除了基本工资，还要考虑奖金、福利、工作弹性、培训机会等因素。\n\n6. **保持专业和尊重**：即使你对提议不满意，也要保持礼貌和专业的态度，避免情绪化的反应。\n\n7. **要求时间考虑**：如果需要时间考虑提议，不要当场接受，可以请求24-48小时的时间。\n\n记住，薪资谈判是一个双向的过程，目的是找到一个双方都满意的解决方案。通过准备和策略，你能够提高获得理想薪资的机会。',
    publishedDate: '2023-07-20',
    readTime: '4 分钟'
  }
];

const GuideDetailPage = () => {
  const { id } = useParams();
  const guide = GUIDE_DETAIL_DATA.find(item => item.id === id);

  if (!guide) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">指南不存在</h2>
          <p className="text-gray-600 mb-6">您访问的指南不存在或已被删除。</p>
          <Link to="/guides" className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors">
            返回指南列表
          </Link>
        </div>
      </div>
    );
  }

  // 将内容中的换行符转换为HTML换行
  const formattedContent = guide.content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line && <p className="mb-4 leading-relaxed">{line}</p>}
    </React.Fragment>
  ));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center">
          <Link to="/guides" className="text-primary hover:underline flex items-center">
            <span className="icon-angle-left mr-2"></span>
            返回指南列表
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{guide.title}</h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-4">发布日期：{guide.publishedDate}</span>
            <span>阅读时间：{guide.readTime}</span>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <div className="prose max-w-none">
            {formattedContent}
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t pt-6">
          <Link to="/guides" className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition-colors">
            查看更多指南
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideDetailPage;