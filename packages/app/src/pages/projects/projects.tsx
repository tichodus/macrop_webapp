import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Calendar } from "@macrop/calendar";
import { Day } from "@macrop/calendar/src/models/day";
import { Dispatchable } from "../../index.d";
import { ActionType } from "../../store/actions";
import moment from "moment";
import { Flex, FlexDirection } from "../../components/flexbox";
import { Project } from "./models/project";
import { ProjectCard } from "./project/project";

interface ProjectsProps extends Dispatchable {
  calendar: Day[];
  projects: Project[];
}

type State = Project | null;

let Projects = (props: ProjectsProps) => {
  const { calendar, dispatch, projects } = props;
  const [selectedProject, setSelectedProject] = useState<State>(null);

  useEffect(() => {
    getCalendar(moment());
    dispatch({ type: ActionType.GET_PROJECTS_FOR_USER });
    if (!selectedProject && projects && projects.length) {
      setSelectedProject(projects[0]);
    }
  }, [!projects]);

  const getCalendar = (date: moment.Moment) => {
    const requestDate = date.format("ddd MMM MM YYYY");
    dispatch({
      type: ActionType.GET_CALENDAR,
      payload: requestDate
    });
  };

  if (!selectedProject) {
    return null;
  }

  return (
    <Flex width="100%">
      <Flex direction={FlexDirection.COLUMN} width={1 / 4}>
        {getProjects(projects)}
      </Flex>
      <Flex paddingX={3} width={3 / 4}>
        <Calendar
          onAddEvent={handleAddEvent}
          onChange={getCalendar}
          calendar={calendar}
        />
      </Flex>
    </Flex>
  );

  function handleAddEvent(date: moment.Moment) {
    //TODO: ADD EVENT
  }

  function getProjects(projects: Project[]) {
    if (!projects) {
      return null;
    }
    return projects.map(project => (
      <ProjectCard
        selected={selectedProject && project.id === selectedProject.id}
        onClick={selectProject}
        key={project.id}
        onPeopleAdd={addPeopleOnProject}
        project={project}
      />
    ));
  }

  function selectProject(project: Project) {
    setSelectedProject(project);
  }

  function addPeopleOnProject(project: Project) {
    dispatch({
      type: ActionType.OPEN_ADD_PEOPLE_ON_PROJECT,
      payload: project.id
    });
  }
};

export default connect((state: any) => {
  return {
    calendar: state.calendarReducer.calendar,
    projects: state.projectsReducer.projects
  };
})(Projects);
