import Card from "../components/card";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Button from "../components/ui/Button";

const Home = () => {
  // can write normal javascript here
  console.log(JOB_DATA);

  // end here
  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <Header />
      <div className="flex-col text-center py-16">
        <h2 className="text-4xl font-bold mb-2">
          Find Tech Jobs in Malaysia MY
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Let employers find you. Or apply to companies directly.
        </p>
        <div className="flex gap-4 items-center justify-center p-4">
          <Button variant="solid">🎯 I want companies to find me</Button>
          <Button variant="outline">🔍 Search Jobs</Button>
        </div>
      </div>
      <p className="ml-[21.5%] text-xl text-gray-800 mb-2 font-bold">
        ⏳ Latest Jobs
      </p>
      <div className="flex gap-4 flex-wrap justify-center items-center w-[80%] mx-auto ">
        {JOB_DATA.map((element, index) => {
          return (
            <Card
              key={index}
              id={element.id}
              title={element.job}
              workplace={element.company}
              description={element.details.job_description[0]}
              date={element.post_date}
              state={element.company_state}
              stack={element.stacks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
