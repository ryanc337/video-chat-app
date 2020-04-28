const formatParticipantsData = (participants) => {
  let participantsArray: any = [];
  for (let i in participants) {
    participants[i].is_in_call = true;
    participantsArray.push(participants[i]);
  }
  return participantsArray;
}

export default formatParticipantsData;