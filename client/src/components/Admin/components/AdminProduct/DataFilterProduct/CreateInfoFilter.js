import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./DataFilterProduct.css";
import { useForm } from "react-hook-form";
import { CloseOutlined } from "@ant-design/icons";
import { CreateSelectListItem, getAllSelectList } from "../../../../../actions/SelectListAction";

export default function CreateInfoFilter() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [addOption, setAddOption] = useState([]);
  
  const handleAddOption = () => {
    const newOption = {
      index: Math.random(),
      value: "",
    };
    setAddOption([...addOption, newOption]);
  };

  const handleRemoveOption = (option) => {
    let newListOption = [...addOption];
    newListOption = newListOption.filter((item) => item.index !== option.index);

    setAddOption(newListOption);
  };

  const handleChangeValueOption = (option, e) => {
    const newListOption = [...addOption];
    const index = newListOption.findIndex(
      (item) => item.index === option.index
    );

    newListOption[index].value = e.target.value;
    setAddOption(newListOption);
  };

  const createArrayOption = (arr) => {
    let options = [];
    arr = arr.map((item) => options.push(`${item.value}`));
    return options;
  };

  const onSubmit = async (data, e) => {
    const options = createArrayOption([...addOption]);
    const newData = { ...data, options };
    await dispatch(CreateSelectListItem(newData));
    setAddOption([]);
    e.target.reset();
    dispatch(getAllSelectList())
  };

  return (
    <div className="update-filter-info">
      <span>Tạo sản phẩm chọn lọc</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Tên danh mục  ... " />
          <input {...register("property")} placeholder="Tên danh mục ..." />
          <div className="option-list">
            {addOption.map((option, index) => (
              <div className="option-list-item" key={index}>
                <input value={option.value} placeholder="tùy chọn mới ..." onChange={(e) => {handleChangeValueOption(option, e)}} />
                <span onClick={() => handleRemoveOption(option)}>
                  <CloseOutlined />
                </span>
              </div>
            ))}
          </div>
          <span onClick={handleAddOption}>Thêm tùy chọn</span>
          <button type="submit">Thêm</button>
        </form>
      </div>
  );
}
