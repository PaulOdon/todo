import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { TaskDTO } from "@/data/dto/Task.dto";
import { useTaskMngt } from "@/hooks/useTaskMngt";
import { EnumTaskStatus } from "@/data/enum/EnumTaskItem";

type TaskFormProps = {
  task?: TaskDTO;
  onClose: () => void;
};

export default function TaskForm({ task, onClose }: TaskFormProps) {
  const { createOneTask, updateOneTask } = useTaskMngt();
  const [name, setName] = useState<string>(task?.name || "");
  const [description, setDescription] = useState<string>(
    task?.description || ""
  );

  const handleSubmit = () => {
    if (task) {
      updateOneTask({ ...task, name, description });
    } else {
      createOneTask({ name, description, status: EnumTaskStatus.PENDING });
    }
    onClose();
  };

  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 16 }}>
        {task ? "Modifier la tâche" : "Créer une tâche"}
      </Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nom"
        style={{
          borderBottomWidth: 1,
          borderColor: "#ccc",
          marginBottom: 12,
          height: 40,
          paddingHorizontal: 4,
        }}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        style={{
          borderBottomWidth: 1,
          borderColor: "#ccc",
          marginBottom: 12,
          height: 40,
          paddingHorizontal: 4,
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={onClose}>
          <Text style={{ color: "red" }}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={{ color: "green" }}>{task ? "Modifier" : "Créer"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
