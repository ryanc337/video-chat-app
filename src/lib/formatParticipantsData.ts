const formatParticipantsData = (participants) => {
  let participantsArray: any = [];
  for (let i in participants) {
    participantsArray.push(participants[i]);
  }
  return participantsArray;
}

export default formatParticipantsData;