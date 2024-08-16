import BeforeAndAfter from '@/components/before-and-after';
import Checked from '@/components/checked';
import Form from '@/components/form';
import Group from '@/components/group';
import GroupName from '@/components/group-name';
import Message from '@/components/message';
import Placeholder from '@/components/placeholder';
import Profile from '@/components/profile';
import ValidForm from '@/components/valid-form';

export default function Home() {
  return (
    <>
      <Message />
      <Profile />
      <Form />
      <Group />
      <GroupName />
      <ValidForm />
      <Checked />
      <BeforeAndAfter />
      <Placeholder />
    </>
  );
}
