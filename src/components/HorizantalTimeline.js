import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

import '../css/timeline.css';

const HorizantalTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#fd80cd"
        >
          May 2024 - Current
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <WorkIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h4" component="span">
            Junior Software Engineer Internship
          </Typography>
          <Typography>Cashly Inc.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="#fd80cd"
        >
          April 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <SchoolIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h4" component="span">
            Graduated Western University
          </Typography>
          <Typography variant="h6">BE.Sc with co-op</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="#fd80cd"
      >
        Augst 2023
      </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <CelebrationIcon/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h4" component="span">
            Completed Internship
          </Typography>
          <Typography variant="h6">16 months at SOTI!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="#fd80cd"
      >
        May 2022
      </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="secondary">
            <SupportAgentIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h4" component="span">
            Product Owner Intern
          </Typography>
          <Typography variant="h6" >SOTI inc.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: 'auto 0' }}
        variant="body2"
        color="#fd80cd"
      >
        September 2019
      </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  />
          <TimelineDot color="secondary">
          <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h4" component="span">
            Enrolled at Western University
          </Typography>
          <Typography variant="h6" >Started post secondary school for my BESc. in Software Engineering</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default HorizantalTimeline;
