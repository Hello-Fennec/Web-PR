import React from "react";
import Card from "./components/card";
import Container from "./components/container";
import SearchBar from "./components/search-bar";
import { projects } from "./utils/projects";
import { teams } from "./utils/teams";
import FilterBadge from "./components/filter-badge";

export default function StudentProjects() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cardHovered, setCardHovered] = React.useState(-1);
  const [cardFilter, setCardFilter] = React.useState([]);

  return (
    <>
      <Container>
        <div className="flex items-center justify-between lg:flex-col mb-6">
          <h1 className="text-2xl font-bold text-left lg:mb-8">
            HelloWorld Fennec's student projects
          </h1>
          <div className="flex lg:w-full">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
        <div className="flex flex-wrap mb-5 ">
          {teams.map((team, index) => {
            return (
              <FilterBadge
                key={index}
                team={team}
                cardFilter={cardFilter}
                setCardFilter={setCardFilter}
              />
            );
          })}
        </div>
        <div className="grid gap-x-4 gap-y-10 grid-cols-4 lg:grid-cols-2 xs:grid-cols-1 ">
          {projects
            .filter((project) =>
              project.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter((project) => {
              return cardFilter.length === 0
                ? true
                : // project categories includes card filter
                  cardFilter.some((item) =>
                    project.categories
                      .map((category) => category.name)
                      .includes(item)
                  );
            })
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
      </Container>
    </>
  );
}
