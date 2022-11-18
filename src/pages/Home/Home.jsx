import { ContainerBody } from 'components/App/App.styled';
import { Title } from 'components/App/App.styled';
import ContactForm from 'components/ContactForm';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  return (
    <section>
      <ContainerBody>
        <Title>New contact</Title>
        <ContactForm />
        <ToastContainer />
      </ContainerBody>
    </section>
  );
};

export default Home;
