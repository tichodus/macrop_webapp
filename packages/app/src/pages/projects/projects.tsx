import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Calendar, CalendarEvent } from "@macrop/calendar";
import { Day } from "@macrop/calendar/src/models/day";
import { Dispatchable } from "../../index.d";
import { ActionType } from "../../store/actions";
import moment from "moment";
import { Flex, FlexDirection } from "../../components/flexbox";
import { Project } from "./models/project";
import { ProjectCard } from "./project/project";
import Pusher from "pusher-js";

interface ProjectsProps extends Dispatchable {
  calendar: Day[];
  projects: Project[];
}

type State = Project | null;

let Projects = (props: ProjectsProps) => {
  const { calendar, dispatch, projects } = props;
  const [selectedProject, setSelectedProject] = useState<State>(null);
  const [calendarDate, setCalendarDate] = useState(moment());

  let pusher = new Pusher("8e83741f8bc3500a7fc7", {
    cluster: "eu",
    forceTLS: true
  });

  let channel = pusher.subscribe("macrop-channel");
  channel.bind("event-created", (data: CalendarEvent) => {
    console.log(data);
    getCalendar(moment(data.start_time));
  });

  useEffect(() => {
    dispatch({ type: ActionType.GET_PROJECTS_FOR_USER });
    if (!selectedProject && projects && projects.length) {
      setSelectedProject(projects[0]);
      getCalendar(moment());
    }
  }, [!projects]);

  useEffect(() => {
    getCalendar(calendarDate);
  }, [selectedProject]);

  const getCalendar = (date: moment.Moment) => {
    const requestDate = date
      .clone()
      .startOf("month")
      .format("ddd MMM MM YYYY");
    if (!selectedProject) {
      return;
    }
    dispatch({
      type: ActionType.GET_CALENDAR,
      payload: { date: requestDate, projectId: selectedProject.id }
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
          onChange={handleCalendarChange}
          calendar={calendar}
        />
      </Flex>
    </Flex>
  );
  function handleCalendarChange(date: moment.Moment) {
    getCalendar(date);
    setCalendarDate(date);
  }

  function handleAddEvent(date: moment.Moment) {
    if (!selectedProject) {
      return;
    }
    dispatch({
      type: ActionType.OPEN_ADD_NEW_EVENT,
      payload: {
        calendarDate: date.format(),
        activeProject: selectedProject.id
      }
    });
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
