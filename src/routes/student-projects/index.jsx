import React from "react";
import Card from "./components/card";
import SearchBar from "./components/search-bar";
import { projects } from "./utils/projects";

export default function StudentProjects() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cardHovered, setCardHovered] = React.useState(-1);

  return (
    <>
      <div className=" max-w-6xl lg:max-w-2xl xs:max-w-md m-auto p-5 py-16 mb-5">
        <div className="flex items-center justify-between lg:flex-col mb-6">
          <h1 className="text-2xl font-bold text-left lg:mb-8">
            HelloWorld Fennec's student projects
          </h1>
          <div className="flex lg:w-full">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="grid gap-x-4 gap-y-10 grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 ">
          {projects
            .filter((project) =>
              project.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((project, index) => {
              const { groupNum, name, link, img, github, figma, categories } =
                project;
              return (
                <Card
                  key={index}
                  index={index}
                  groupNum={groupNum}
                  name={name}
                  link={link}
                  img={img}
                  github={github}
                  figma={figma}
                  categories={categories}
                  cardHovered={cardHovered}
                  setCardHovered={setCardHovered}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
