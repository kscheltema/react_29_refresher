import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    //send a http request here
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
