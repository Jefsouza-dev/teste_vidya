import { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachCustomer } from "./EachCustomer";
import { NewCustomerModal } from "./NewCustomerModal";
import { CustomerDetailsModal } from "./CustomerDetailsModal";
import { CustomersContext } from "../../../../contexts/CustomersContext";

export const CustomerSection = () => {
  const { customers, setCustomers } = useContext(CustomersContext);
  const [openAddNewCustomerModal, setOpenAddNewCustomerModal] = useState(false);
  const [openCustomerDetailsModal, setOpenCustomerDetailsModal] =
    useState(false);

  const handleAddNewCustomerModal = () => {
    setOpenAddNewCustomerModal(!openAddNewCustomerModal);
  };

  const handleCustomerDetailsModal = () => {
    setOpenCustomerDetailsModal(!openCustomerDetailsModal);
  };

  useEffect(() => {
    const searchCustomers = () => {
      const storedCustomers =
        JSON.parse(localStorage.getItem("@customers")) || [];
      setCustomers(storedCustomers);
    };

    searchCustomers();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const filterItem = (event) => setSearchTerm(event.target.value);

  return (
    <>
      <ActionBar
        titleSection={"Cliente"}
        setOpenModal={handleAddNewCustomerModal}
        filterItem={filterItem}
      />

      <S.CustomerListContainer>
        {customers
          .filter((customer) =>
            customer.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((customer) => (
            <EachCustomer
              key={customer.id}
              openModal={handleCustomerDetailsModal}
              customer={customer}
            />
          ))}
      </S.CustomerListContainer>

      {openAddNewCustomerModal && (
        <NewCustomerModal closeModal={handleAddNewCustomerModal} />
      )}

      {openCustomerDetailsModal && (
        <CustomerDetailsModal closeModal={handleCustomerDetailsModal} />
      )}
    </>
  );
};
