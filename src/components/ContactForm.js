export default function ContactForm() {
  return (
    <>
    
    <input placeholder="Имя" type="text" name="name" />
      <input placeholder="E-mail"  type="text" name="email" />
      <textarea placeholder="Текст сообщения"  name="text-message" />
      <button type="submit">Отправить сообщение</button>
    </>
  );
}