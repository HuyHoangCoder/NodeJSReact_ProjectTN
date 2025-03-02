import React, { useState } from "react";
import Select from "react-select";
import { SelectList } from "../AllTypeProduct/FilterMenuList";
import { useForm } from "react-hook-form";

export default function SelectDetailProduct() {
  const { register, handleSubmit } = useForm();
  const [selected, setSelected] = useState("");

  const handleChange = (selectedOption) => {
    setSelected(selectedOption.value);
  };

  return (
    <div>
      {SelectList.map((item) => (
        <select {...register("category")}>
          <option value="A">Danh mục A</option>
          <option value="B">Danh mục B</option>
        </select>
      ))}
    </div>
  );
}
