class API {
  constructor(url) {
    this.url = url;
    this.contentTypeHeader = { "Content-Type": "application/json" };
  }

  load() {
    return fetch(this.url);
  }

  show(id) {
    return fetch(`${this.url}/${id}`);
  }
  add(contact) {
    return fetch(this.url, {
      body: JSON.stringify(contact),
      method: "POST",
      headers: this.contentTypeHeader,
    });
  }
  change(id, name, description) {
    return fetch(this.url, {
      body: JSON.stringify(id, name, description),
      method: "PUT",
      headers: this.contentTypeHeader,
    });
  }
  changeStatus(id) {
    return fetch(`${this.url}/${id}`, {
      method: "PATCH",
    });
  }
  remove(id) {
    return fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
  }
}

(async () => {
  const api = new API("https://apps-neww.herokuapp.com/contacts");
  {
    const response = await api.load();
    const data = await response.json();
  }
  {
    const response = await api.load();
    const data = await response.json();
  }
})();

export { API };
