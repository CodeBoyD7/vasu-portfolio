import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-10">
      <h1 className="project-heading text-4xl font-bold mb-5">
        Days I <strong className="text-purple-500">Code</strong>
      </h1>
      <GitHubCalendar
        username="CodeBoyD7"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </div>
  );
}

export default Github;
