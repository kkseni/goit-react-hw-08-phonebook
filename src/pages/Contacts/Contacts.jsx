import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ContainerBody, Title } from 'components/App/App.styled';
// import { useFetchContactsQuery } from 'redux/Query/contactAPI';
import Loader from 'utils/Loader';
import { useGetContacsQuery } from 'redux/Query/UserApi';

const Contacts = () => {
  // РТК Query (отримання контактів з беку)
  const { data, isFetching } = useGetContacsQuery();

  return (
    <>
      <ContainerBody>
        <Title>All contacts</Title>

        <Filter />
        {isFetching && <Loader />}
        {data && <ContactList contacts={data} />}
      </ContainerBody>
    </>
  );
};

export default Contacts;
