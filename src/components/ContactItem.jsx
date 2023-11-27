import DeleteBtn from 'components/DeleteBtn';

const ContactItem = ({ userName, userNumber, userId }) => {
  return (
    <li id={userId}>
      <h3>{`${userName}: ${userNumber}`}</h3>
      <DeleteBtn userId={userId}></DeleteBtn>
    </li>
  );
};

export default ContactItem;