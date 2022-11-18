import { Item, Button } from './ContactList.styled';
// import { useDeleteContactsMutation } from 'redux/Query/contactAPI';
import { useDeleteContactsMutation } from 'redux/Query/UserApi';
import { showInfo } from 'utils/Toast/toastMessage';

const ContactListItem = ({ id, name, number }) => {
  // РТК Query (логіка кнопки видалення)
  const [deleteContact, results] = useDeleteContactsMutation();

  if (results.isSuccess) {
    showInfo('Successful removal');
  }
  return (
    <Item>
      {name}: {number}
      <Button onClick={() => deleteContact(id)} disabled={results.isLoading}>
        {results.isLoading ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};

export default ContactListItem;
