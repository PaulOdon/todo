import TaskForm from "@/components/task/TaskForm";
import TaskItem from "@/components/task/TaskItem";
import { TaskDTO } from "@/data/dto/Task.dto";
import { useTaskMngt } from "@/hooks/useTaskMngt";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Index() {
  const { tasks, loading, error, deleteOneTask, sortTasksById } = useTaskMngt();
  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = React.useState<TaskDTO | null>(null);
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");

  const handleCreate = () => {
    setTaskToEdit(null);
    setIsFormVisible(true);
  };

  const handleEdit = (task: TaskDTO) => {
    setTaskToEdit(task);
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
    setTaskToEdit(null);
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        padding: 16,
      }}
    >
      {/* head */}
      <View
        style={{
          minWidth: 300,
          display: "flex",
          gap: 8,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "gray",
          }}
        >
          Task management
        </Text>
        <View
          style={{
            minWidth: 300,
            display: "flex",
            gap: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={handleCreate}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Text>Créer une tâche</Text>
            <Ionicons size={18} name="add" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => sortTasksById(order === "asc" ? "desc" : "asc")}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Ionicons size={18} name="swap-vertical" />
          </TouchableOpacity>
        </View>
      </View>

      {/* form */}
      {isFormVisible && (
        <TaskForm task={taskToEdit || undefined} onClose={handleCloseForm} />
      )}

      {/* loading */}
      {!loading && tasks.length === 0 && !error && (
        <Text style={{ color: "black" }}>
          Aucune tâche créer pour le moment
        </Text>
      )}

      {/* list */}

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: 16,
        }}
      >
        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEdit}
            onDelete={deleteOneTask}
          />
        ))}
      </View>

      {/* error */}
      {error && (
        <Text style={{ color: "red" }}>Une erreur a été rencontré</Text>
      )}
    </View>
  );
}
