import Form from '@/components/form';
import Group from '@/components/group';
import GroupName from '@/components/group-name';
import Message from '@/components/message';
import Profile from '@/components/profile';

export default function Home() {
  return (
    <>
      <Message />
      <Profile />
      <Form />
      <Group />
      <GroupName />
    </>
  );
}
