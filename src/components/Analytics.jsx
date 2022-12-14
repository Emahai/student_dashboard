import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { cardStyles } from "./ReusableStyles";
export default function Analytics() {
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h1>1</h1>
          <h5>Completed Course</h5>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
        <BsFillCalendar2WeekFill />
        </div>
        <div className="content">
        <h1>1</h1>
        <h5>Ongoing Course</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
        <BsFillCalendar2WeekFill />
        </div>
        <div className="content">
        <h1>1</h1>
        <h5>Total Course</h5>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
        <h1>1</h1>
        <h5>Saved Course</h5>
        </div>
        <div className="logo">
        <BsFillCalendar2WeekFill />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    background-color: orange;
    color: white;
    &:hover {
      background-color: black;
      color: orange;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
