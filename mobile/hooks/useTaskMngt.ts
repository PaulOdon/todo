import { TaskDTO } from "@/data/dto/Task.dto";
import { taskService } from "@/service/task.service";
import React from "react";

export const useTaskMngt = () => {
  const [tasks, setTasks] = React.useState<TaskDTO[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  const { fetchAll, createOne, updateOne, deleteOne } = taskService();

  function loadAllTask(sortBy?: string, order?: "asc" | "desc") {
    setLoading(true);
    fetchAll(sortBy, order)
      .then((res) => {
        setTasks(res);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function createOneTask(data: TaskDTO) {
    setLoading(true);
    createOne(data)
      .then((task) => {
        setTasks((current) => [...current, task]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateOneTask(data: TaskDTO) {
    setLoading(true);
    updateOne(data)
      .then((updatedTask) => {
        setTasks(() => {
          return tasks.map((item) =>
            item.id === updatedTask.id ? updatedTask : item
          );
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function deleteOneTask(id: number) {
    setLoading(true);
    deleteOne(id)
      .then(() => {
        setTasks((current) => {
          return current.filter((item) => item.id !== id);
        });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
        loadAllTask();
      });
  }

  React.useEffect(() => {
    loadAllTask();
  }, []);

  return {
    tasks,
    loading,
    error,
    setTasks,
    setError,
    loadAllTask,
    createOneTask,
    updateOneTask,
    deleteOneTask,
  };
};
