import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import api from "@/lib/axios";
import { toast } from "sonner";

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = React.useState("");
  const addtask = async () => {
    if (newTaskTitle.trim()) {
      // Prevent adding empty tasks
      try {
        await api.post("/tasks", {
          title: newTaskTitle,
        });
        toast.success(`Task "${newTaskTitle}" added successfully!`);
        handleNewTaskAdded();
      } catch (error) {
        console.error("Error adding task:", error);
        toast.error("Failed to add new task. Please try again.");
      }
      setNewTaskTitle("");
    } else {
      toast.error("Task title cannot be empty!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addtask();
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20 px-4"
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="gradient"
          size="xl"
          className="px-6"
          onClick={addtask}
          disabled={!newTaskTitle.trim()}
        >
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
