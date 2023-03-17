import { type AnyAction, type Store } from 'redux';

import * as features from 'features';
import { type FeatureSaga, type AppReduxState } from 'shared/types';

import { configureDeps } from './configureDeps';
import { configureStore } from './configureStore';

function configureApp(): {
  store: Store<AppReduxState, AnyAction>;
} {
  const { runSaga, store } = configureStore();
  const dependencies = configureDeps(store);

  const featureSagas = [
    features.info.entry.saga,
    features.protocol.entry.saga,
  ].filter((saga) => saga !== undefined) as FeatureSaga[];

  featureSagas.forEach((saga) => runSaga(saga, dependencies));

  return { store };
}

export { configureApp };
