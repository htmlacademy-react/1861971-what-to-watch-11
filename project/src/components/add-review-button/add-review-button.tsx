type AddReviwButtonProps = {
  cleaningInput: Function;
  detector: boolean;
};


function AddReviwButton ({cleaningInput, detector}: AddReviwButtonProps) {
  if (detector) {
    return <button className="add-review__btn" type="submit" disabled onClick={cleaningInput}>Post</button>;
  }
  return <button className="add-review__btn" type="submit" onClick={cleaningInput}>Post</button>;
}

export default AddReviwButton;
