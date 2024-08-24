import AddVariant from '@/components/add-variant';
import ApplyButton from '@/components/apply-button';
import AspectRatio from '@/components/aspect-ratio';
import BeforeAndAfter from '@/components/before-and-after';
import Blockquote from '@/components/blockquote';
import Button from '@/components/button';
import ButtonForm from '@/components/button-form';
import Checked from '@/components/checked';
import ColorButton from '@/components/color-button';
import Columns from '@/components/columns';
import Details from '@/components/details';
import First from '@/components/first';
import Form from '@/components/form';
import Grid from '@/components/grid';
import Group from '@/components/group';
import GroupName from '@/components/group-name';
import ListStyle from '@/components/list-style';
import MediaScreen from '@/components/media-screen';
import Message from '@/components/message';
import NavHref from '@/components/nav-href';
import Placeholder from '@/components/placeholder';
import Prefix from '@/components/prefix';
import Print from '@/components/print';
import Profile from '@/components/profile';
import Screen from '@/components/screen';
import SelectText from '@/components/selection-text';
import Support from '@/components/support';
import Theme from '@/components/theme';
import Typography from '@/components/typography';
import ValidForm from '@/components/valid-form';

export default function Home() {
  return (
    <div className='container'>
      <Message />
      <Profile />
      <Form />
      <Group />
      <GroupName />
      <ValidForm />
      <Checked />
      <BeforeAndAfter />
      <Placeholder />
      <ButtonForm />
      <ListStyle />
      <SelectText />
      <First />
      <Grid />
      <Print />
      <Support />
      <Details />
      <MediaScreen />
      <Theme />
      <NavHref />
      <ApplyButton />
      <Prefix />
      <Button size='md' color='indigo'>
        Test
      </Button>
      <Blockquote />
      <Screen />
      <ColorButton />
      <Typography />
      <AspectRatio />
      <AddVariant />
      <Columns />
    </div>
  );
}
