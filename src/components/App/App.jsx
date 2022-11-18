import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header';
import PrivateRoutes from 'components/PrivateRoutes/PrivateRoutes';
import { useCurrentAuthQuery } from 'redux/Query/UserApi';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/contactSelectors';
import Loader from 'utils/Loader';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const UserMenu = lazy(() => import('components/UserMenu'));

const App = () => {
  const { token } = useSelector(getUser);

  useCurrentAuthQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/userMenu" element={<UserMenu />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;

// const INITIAL_STATE = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// class App extends Component {
//   state = { ...INITIAL_STATE };

//   // Добавляє та оновлює масив об'єктів
//   formSubmitHandler = formData => {
//     const contactsName = this.state.contacts.map(el => el.name);

//     // Перевірка на однакові імена
//     contactsName.includes(formData.name)
//       : this.setState(prevState => ({
//           contacts: [...prevState.contacts, formData],
//         }));
//   };

//   // Логіка кнопки видалення
//   handleDeleteItem = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(item => item.id !== id),
//     }));
//   };

//   // Інпут фільтра значення, те, що вводимо
//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   // Логіка фільтру
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   // Життєвий цикл та рендер з "LocalStorage".
//   // Запускається один раз при звантаженні сторінки
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   // Життєвий цикл на оновлення та отримання даних в "LocalStorage"
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <ContainerBody>
//         <Title>Phonebook</Title>

//         <ContactForm onSubmit={this.formSubmitHandler} />

//         <TitleSecond>Contacts</TitleSecond>

//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           deleteBtn={this.handleDeleteItem}
//         />
//       </ContainerBody>
//     );
//   }
// }

// export default App;
