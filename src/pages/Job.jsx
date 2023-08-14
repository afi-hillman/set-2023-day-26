import { useParams } from "react-router-dom";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Details from "../components/Details";
import Description from "../components/Description";
import Button from "../components/ui/Button";
import Qualification from "../components/Qualification";

const Job = () => {
  const params = useParams();
  const jobId = parseInt(params?.id);
  const selectedJob = JOB_DATA.find((element) => element.id === jobId);
  const position = "full time";
  const hours = "unspecified";
  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <Header />
      <div className="container mx-auto py-8 flex flex-col items-center">
        <div className="flex flex-row justify-start">
          <h1 className="text-2xl md:text-xl font-semibold mb-2">
            Jobs / {selectedJob.job}
          </h1>
        </div>
        <div className=" bg-white flex flex-col justify-center items-start w-[700px] min-h-screen border-blue-300 border-2 rounded-lg p-4">
          <Details
            title={selectedJob.job}
            workplace={selectedJob.company}
            date={selectedJob.post_date}
            location={selectedJob.company_state}
            position={position}
            hours={hours}
          />
          <Button variant="long">Apply Now 🚀</Button>
          <p className="mt-4 text-[#4A5568] pl-4 pr-4">
            Please mention that you found the job on Kerja-IT.com, this helps us
            get more companies to post here. Thanks.
          </p>
          <h4 className="text-xl p-4">✍ Job Description</h4>
          <p className="text-lg font-semibold mt-2 border-b-0 ml-14">
            Job Details
          </p>
          <Description description={selectedJob.details.job_description[0]} />
          <p className="text-lg font-semibold mt-2 border-b-0 ml-14">
            Job Requirements
          </p>
          <Qualification qualification={selectedJob.details.qualification[0]} />
          <Button variant="long">Apply Now 🚀</Button>
          <p className="mt-4 text-[#4A5568] pl-4 pr-4">
            Please mention that you found the job on Kerja-IT.com, this helps us
            get more companies to post here. Thanks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Job;
