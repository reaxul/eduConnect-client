import  { useState } from "react";
// import "./ResearchPapers.css";

const ResearchPapers = () => {
  const [showPapers, setShowPapers] = useState(true);
    const papers=[
        {
          "id": 1,
          "title": "The Impact of Social Media on College Students' Mental Health",
          "author": "Alice Abaraham",
          "abstract": "This paper explores the impact of social media on college students' mental health. The paper finds that social media can have both positive and negative effects on mental health. On the one hand, social media can provide a platform for students to connect with friends and family, and to stay up-to-date on current events. On the other hand, social media can also lead to increased social comparison, cyberbullying, and anxiety.",
          "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4629340/"
        },
        {
          "id": 2,
          "title": "The Role of College Students in Social Entrepreneurship",
          "author": "Bill Byron",
          "abstract": "This paper examines the role of college students in social entrepreneurship. The paper finds that college students are increasingly involved in social entrepreneurship, and that they are making a significant impact on society. College students are using their skills and talents to address social problems such as poverty, hunger, and environmental degradation.",
          "url": "https://www.forbes.com/sites/forbestechcouncil/2022/01/27/the-rise-of-student-social-entrepreneurship/?sh=3b5495f41851"
        },
        {
          "id": 3,
          "title": "The Future of College Education in the Age of Technology",
          "author": "Christie Chang",
          "abstract": "This paper explores the future of college education in the age of technology. The paper finds that technology is transforming college education in a number of ways. For example, technology is making it easier for students to access courses and resources, and it is also making it easier for students to connect with professors and classmates. Technology is also making it possible for students to learn at their own pace and on their own terms.",
          "url": "https://www.thebalancecareers.com/future-of-higher-education-4161681"
        },
        {
          "id": 4,
          "title": "The Importance of College for Success in the 21st Century",
          "author": "David Doel",
          "abstract": "This paper argues for the importance of college for success in the 21st century. The paper finds that college graduates earn significantly more money than those with only a high school diploma. College graduates are also more likely to be employed and to have a job that they enjoy. College graduates are also more likely to be involved in civic life and to volunteer their time.",
          "url": "https://www.brookings.edu/research/the-economic-benefits-of-higher-education/"
        },{
            "id": 5,
            "title": "The Impact of College on Civic Engagement",
            "author": "Emily Jones",
            "abstract": "This paper examines the impact of college on civic engagement. The paper finds that college students are more likely to be civically engaged than those who do not attend college. College students are more likely to volunteer their time, to vote, and to participate in other forms of civic engagement.",
            "url": "https://www.pewresearch.org/social-trends/2018/01/22/civic-engagement-and-volunteering-among-college-graduates/"
          },
          {
            "id": 6,
            "title": "The Relationship Between College and Happiness",
            "author": "John Smith",
            "abstract": "This paper explores the relationship between college and happiness. The paper finds that college graduates are happier than those who do not attend college. College graduates are more likely to report being happy with their lives, and they are less likely to report feeling depressed or anxious.",
            "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4685644/"
          }
          
      ]
      

  return (
    <div className="bg-gray-900 py-8 dark:bg-gray-900 transition-colors rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-white dark:text-gray-100">
          Research Papers by College Students
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="bg-white rounded-lg shadow p-4 dark:bg-gray-900 transition-colors hover:bg-blue-100 dark:hover:bg-gray-600"
            >
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {paper.title}
              </h3>
              <p className="text-gray-600 mb-2 dark:text-gray-300">
                {paper.author}
              </p>
              <p className="text-gray-800 dark:text-gray-100">{paper.abstract}</p>
              <a
                href={paper.url}
                className="text-blue-600 hover:text-blue-800 mt-2 block dark:text-green-400 dark:hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
        <button
          className="block mx-auto mt-6 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-800 transition-colors"
          onClick={() => setShowPapers(false)}
        >
          See Less
        </button>
      </div>
    </div>
  );
};

export default ResearchPapers;
