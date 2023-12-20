export default function ListItem({ vegetable }) {
  return (
    <li>
      ID: {vegetable.id} - {vegetable.name}- {vegetable.color}
    </li>
  );
}
