import {FormControl} from '@angular/forms';
export function pinCodeValidator(control: FormControl): { [s: string]: boolean } {
	if (!control.value.match(/^\d{6}$/)) {
		return {invalidPinCode: true};
	}
}
