import { ClientProfile, TestResult } from '../types';

const CLIENTS_STORAGE_KEY = 'psychotests_clients_registry';
const HISTORY_STORAGE_KEY = 'psychotests_results_history';
const ACTIVE_CLIENT_KEY = 'psychotests_active_client_id';

export const getClients = (): ClientProfile[] => {
  try {
    const raw = localStorage.getItem(CLIENTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading clients from storage:', e);
    return [];
  }
};

export const saveClient = (client: ClientProfile): void => {
  try {
    const list = getClients();
    const existingIdx = list.findIndex((c) => c.id === client.id);
    if (existingIdx >= 0) {
      list[existingIdx] = client;
    } else {
      list.unshift(client);
    }
    localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Error saving client:', e);
  }
};

export const deleteClient = (clientId: string): void => {
  try {
    const list = getClients().filter((c) => c.id !== clientId);
    localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(list));
    if (getActiveClientId() === clientId) {
      setActiveClientId(null);
    }
  } catch (e) {
    console.error('Error deleting client:', e);
  }
};

export const getActiveClientId = (): string | null => {
  return localStorage.getItem(ACTIVE_CLIENT_KEY);
};

export const setActiveClientId = (clientId: string | null): void => {
  if (clientId) {
    localStorage.setItem(ACTIVE_CLIENT_KEY, clientId);
  } else {
    localStorage.removeItem(ACTIVE_CLIENT_KEY);
  }
};

export const getActiveClient = (): ClientProfile | null => {
  const activeId = getActiveClientId();
  if (!activeId) return null;
  const list = getClients();
  return list.find((c) => c.id === activeId) || null;
};

// Result History linked with Clients
export const getAllResults = (): TestResult[] => {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading results history:', e);
    return [];
  }
};

export const saveTestResultToHistory = (result: TestResult): void => {
  try {
    const history = getAllResults();
    history.unshift(result);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Error saving result to history:', e);
  }
};

export const getResultsForClient = (clientId: string): TestResult[] => {
  return getAllResults().filter((r) => r.clientId === clientId);
};

export const deleteTestResult = (resultId: string): void => {
  try {
    const history = getAllResults().filter((r) => r.id !== resultId);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Error deleting result:', e);
  }
};
