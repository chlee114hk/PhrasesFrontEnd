class PhraseCtrl {
  constructor(phrases, $localStorage) {
    'ngInject';

    this._phrases = phrases;

    let searchFilter = {
        id: '', 
        context: '', 
        value: '',
        notes: '',
        status: 'visible'
    };

    this.isAllSelected = false;

    // hold the phrases showing to user
    this.filteredPhrases = [];
    // hold the selected phrases
    this.selectedPhrases = {};

    this.searchFilter = searchFilter;
    this.orderFilter = 'id';

    this.visiableCount = this._phrases.filter((phrase) => phrase.status == 'visible').length;
    this.selectedCount = 0;

    // hold a phrase for adding notes
    this.currentEditing = null;
    this.tempNotes = null;

    this._storage = $localStorage;
    this._storage.notes = this._storage.notes || {};
  }

  // toggle select all
  toggleAll() {
     let toggleStatus = this.isAllSelected;
     angular.forEach(
        this.filteredPhrases, 
        (itm) => {
          if (itm.selected != toggleStatus) {
            itm.selected = toggleStatus;
            this.selectedCount += itm.selected ? 1 : -1;
          }
          if (this.isAllSelected) {
            this.selectedPhrases[itm.id] = itm;
          } else {
            delete this.selectedPhrases[itm.id];
          }
        }
    );
  }

  // update isAllSelected when checkbox of phrase selected 
  itemToggled(isSelected, index) {
    this.isAllSelected = this.filteredPhrases.every((itm) => { return itm.selected; });
    this.selectedCount += (isSelected ? 1 : -1);
    let id = this.filteredPhrases[index].id;
    if (isSelected) {
      this.selectedPhrases[id] = this.filteredPhrases[index];
    }else{
      delete this.selectedPhrases[id];
    }
  }

  // update selected phrases' status
  setPhrasesStatus(status) {
    angular.forEach(
      //this.filteredPhrases,
      this.selectedPhrases,
      (itm) => {
        if (itm.selected && itm.status != status) {
          itm.status = status;
          this.visiableCount += (status == 'visible' ? 1 : -1);
        }
      }
    );
  }
  
  // set filter status to visible or hidden
  setActiveStatus(status) {
    this.searchFilter.status = status;
  }

  openModal(index) {
    this.currentEditing = this.filteredPhrases[index];
    this.tempNotes = this.currentEditing.notes;
  }

  closeModal(index) {
    this.currentEditing = null;
  }

  // save notes to model and store in localstorage
  saveNotes() {
    this.currentEditing.notes = this.tempNotes;
    this._storage.notes[this.currentEditing.id] = this.tempNotes;
    this.tempNotes = null;
    this.currentEditing = null;
  }


}


export default PhraseCtrl;