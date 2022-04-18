import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import NaturalDragAnimation from "natural-drag-animation-rbdnd";
// import CustomAvatar from "../TableComponents/CustomAvatar";
import HighPriorityIcon from "../../assets/icons/HighPriorityIcon.png";
import MediumPriorityIcon from "../../assets/icons/MediumPriorityIcon.png";
import LowPriorityIcon from "../../assets/icons/LowPriorityIcon.png";

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  background: ${({ isDragging }) =>
    isDragging ? "rgba(255, 59, 59, 0.15)" : "white"};
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
  .status{
    display: flex;
  }
   .priority{ 
    display:flex;
    img{
      width: 20px !important;
      height: 20px !important;
      margin-right: 12px; */
   margin-top: 2px; */
   } 
   } 
`;

export default function TrelloTasksCard({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <NaturalDragAnimation
          style={provided.draggableProps.style}
          snapshot={snapshot}
        >
          {(style) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={style}
            >
              <TaskInformation>
                <p>{item.name}</p>
                <p>Description: {item.description}</p>
                <div className="secondary-details">
                  <p>
                    <span className="status">
                      Due:{" "}
                      {new Date(item.due_date).toLocaleDateString("en-us", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                      &nbsp;&nbsp;Priorty:&nbsp;&nbsp;
                      {
                        <span className="priority">
                          {item.priority === "High" ? (
                            <img
                              src={HighPriorityIcon}
                              alt="High Priority Icon"
                            />
                          ) : item.priority === "Medium" ? (
                            <img
                              src={MediumPriorityIcon}
                              alt="Medium Priority Icon"
                            />
                          ) : (
                            <img
                              src={LowPriorityIcon}
                              alt="Low Priority Icon"
                            />
                          )}
                        </span>
                      }
                    </span>
                  </p>
                </div>
              </TaskInformation>
            </div>
          )}
        </NaturalDragAnimation>
      )}
    </Draggable>
  );
}

/* <span className="priority">
{item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
</span>
<div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div> */