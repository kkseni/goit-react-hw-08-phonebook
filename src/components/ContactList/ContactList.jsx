import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/contactSelectors';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => {
  // Підключаємо фільтр
  const filterInput = useSelector(getFilter);
  const getVisibleContact = () => {
    const normalizedName = filterInput.toLowerCase();

    // Зрівняння імені в 'DATA' через фільтер
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedName)
    );
  };

  return (
    <div>
      <List>
        {getVisibleContact().map(el => (
          <ContactListItem key={el.id} {...el} />
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactList;
