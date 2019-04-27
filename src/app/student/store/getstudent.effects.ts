import {Effect, Actions} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as getstudenaction from './getstudent.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { GetstudentService } from './getstudent.service';
@Injectable()
export class GetStudenEffect {
constructor(private action$: Actions,
private fromservices: GetstudentService
) {}

@Effect()
loadgetstudent$ = this.action$.ofType(getstudenaction.LOAD_STUDENT)
.pipe(switchMap(() => {
return this.fromservices.getstudent().pipe
(map(getstudent => new getstudenaction.LoadStudentSuccess(getstudent)),
catchError(error => 'new getstudenaction.LoadStudentFail(error)')


);
})

);
}
