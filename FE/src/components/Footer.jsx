import react from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎉 Congratulation! You have done {completedTasksCount} tasks,
                {activeTasksCount > 0 && `remaining ${activeTasksCount} to do!`}
              </>
            )}
            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Do {activeTasksCount} tasks now!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
