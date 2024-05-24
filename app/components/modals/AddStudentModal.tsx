import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { CancelButton } from "../elements/CancelButton";
import SelectDropDown from "../form/SelectDropDown";
import { InputField } from "../form/InputField";
import { Button } from "../elements/Button";
import { Loader } from "../elements/Loader";
import { Modal } from "../elements/Modal";
import { useForm } from "react-hook-form";

interface AddStudentModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  modalOpen: boolean;
}

const AddStudentModal = ({
  setModalOpen,
  modalOpen,
  modalRef,
}: AddStudentModalProps) => {
  const handleClose = () => {
    setModalOpen(false);
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const isLoading = false;
  return (
    <Modal
      variant="middle"
      className={clsx(
        " w-[664px] max-h-[714px] mx-auto justify-center overflow-y-auto rounded-md bg-white-200 p-6"
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
              <h3 className="font-bold text-[20px]">Adjust Stock</h3>
              <p className="text-sm text-primary-200 mt-1">
                Manage stock at each available store. Updates will recalculate
                your inventory and reports to-date.
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
                  Stock action
                </p>
                <SelectDropDown
                  isComponentVisible={false}
                  options={[]}
                  handleSelect={() => void null}
                  handleOpenSelect={() => void null}
                  selectedOption={{ name: "", id: "" }}
                />
              </div>
              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Add Stock
                </p>
                <div className="px-2 pb-2">
                  <InputField
                    hasError={undefined}
                    registration={{ ...register("email") }}
                    // errorMessage={errors.email?.message}
                    label="E-mail"
                    isRequired
                    className="bg-white"
                  />
                </div>
              </div>

              <div className="grid items-center grid-cols-2 min-h-[50px] border-b">
                <p className="text-sm font-bold h-full flex px-6 items-center bg-white-100 border-r">
                  Low stock alert
                </p>
                <div className="px-2 pb-2">
                  <InputField
                    hasError={undefined}
                    registration={{ ...register("email") }}
                    // errorMessage={errors.email?.message}
                    label="E-mail"
                    isRequired
                    className="bg-white"
                  />
                </div>
              </div>
            </div>
            <Button className="mt-6 ml-auto">Done</Button>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default AddStudentModal;
