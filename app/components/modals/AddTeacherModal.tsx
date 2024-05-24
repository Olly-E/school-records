import { Control, Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import clsx from "clsx";

import { addTeacherValidationSchema } from "@/app/features/teachers/utils/validationSchema";
import { addTeacherData } from "@/app/features/teachers/api/addTeacherData";
import { AddTeacherFormProps } from "@/app/features/teachers/types";
import { GENDER_OPTIONS, TITLE } from "@/app/utils/constants";
import { InputFieldPhoneNo } from "../form/InputFieldPhoneNo";
import { CancelButton } from "../elements/CancelButton";
import { InputDateField } from "../form/InputDateField";
import SelectDropDown from "../form/SelectDropDown";
import { InputMoney } from "../form/InputMoney";
import { InputField } from "../form/InputField";
import { Button } from "../elements/Button";
import { Loader } from "../elements/Loader";
import { Modal } from "../elements/Modal";

interface AddTeacherModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  modalOpen: boolean;
}

const AddTeacherModal = ({
  setModalOpen,
  modalOpen,
  modalRef,
}: AddTeacherModalProps) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    reset,
  } = useForm<AddTeacherFormProps>({
    resolver: yupResolver(addTeacherValidationSchema),
  });

  const onSubmit = (data: AddTeacherFormProps) => {
    addTeacherData({
      ...data,
      salary: data.salary || "",
      id: Math.random().toString(36).substr(2, 9),
    });
    reset();
    handleClose();
  };

  const isLoading = false;

  return (
    <Modal
      variant="middle"
      className={clsx(
        " w-[664px] max-h-[714px] mx-auto justify-center overflow-y-auto rounded-md bg-white-200 p-6 bg-white"
      )}
      showDialog={modalOpen}
      closeModal={handleClose}
      modalRef={modalRef}
    >
      {isLoading ? (
        <div className="pt-[13px] px-[13px] h-[calc(100vh-98px)]">
          <Loader />
        </div>
      ) : (
        <div className="rounded  mx-auto bg-white-state">
          <div className="flex items-start justify-between border-b pb-4">
            <div>
              <h3 className="font-bold text-[20px]">Add Teacher</h3>
              <p className="text-sm text-primary-200 mt-1">
                Add Teacher details
              </p>
            </div>
            <CancelButton
              handleClick={handleClose}
              className="w-[33.91px] min-w-[33.91px] max-h-[33.91px] h-[33.91px] min-h-[33.91px] rounded"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-8 border rounded">
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  First Name
                </p>
                <div className="px-2 py-2">
                  <InputField
                    hasError={errors.firstName}
                    registration={{ ...register("firstName") }}
                    isRequired
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Last Name
                </p>
                <div className="px-2 py-2">
                  <InputField
                    hasError={errors.lastName}
                    registration={{ ...register("lastName") }}
                    isRequired
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Gender
                </p>
                <div className="p-2">
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="gender"
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <SelectDropDown
                          options={GENDER_OPTIONS}
                          handleSelect={onChange}
                          hasError={!!error}
                          selectedOption={value}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Title
                </p>
                <div className="p-2">
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="title"
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <SelectDropDown
                          options={TITLE}
                          handleSelect={onChange}
                          hasError={!!error}
                          selectedOption={value}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  NIN
                </p>
                <div className="px-2 py-2">
                  <InputField
                    hasError={errors.nin}
                    registration={{ ...register("nin") }}
                    isRequired
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Phone Number
                </p>
                <div className="px-2 py-2">
                  <div className="">
                    <InputFieldPhoneNo
                      className="outline-none"
                      control={control as unknown as Control}
                      errorMessage={errors.phone?.message}
                      name="phone"
                      hasError={errors.phone}
                      isRequired
                    />
                  </div>
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b w-full">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Salary
                </p>
                <div className="p-2">
                  <Controller
                    name="salary"
                    control={control}
                    render={({ field: { value: salaryValue, onChange } }) => (
                      <InputMoney
                        className=" px-4"
                        value={salaryValue as string}
                        hasError={errors.salary}
                        onChange={onChange}
                        errorMessage={undefined}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Date of Birth
                </p>
                <div className="px-2 py-2">
                  <InputDateField
                    name="dob"
                    className=""
                    control={control as unknown as Control}
                    placeholder="Date of birth"
                    hasError={errors.dob}
                    //maxDate={endDate || new Date()}
                    isRequired
                  />
                </div>
              </div>
            </div>
            <Button className="mt-6 ml-auto" type="submit">
              Done
            </Button>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default AddTeacherModal;
