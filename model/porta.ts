export default class PortaModel {
    private _numero: number
    private _temPresente: boolean
    private _selecionada: boolean
    private _aberta: boolean

    constructor(numero, temPresente = false, selecionada = false, aberta = false) {
        this._numero = numero
        this._temPresente = temPresente
        this._selecionada = selecionada
        this._aberta = aberta
    }

    get numero() {
        return this._numero
    }

    get temPresente() {
        return this._temPresente
    }

    get selecionada() {
        return this._selecionada
    }

    get aberta() {
        return this._aberta
    }

    deselecionar() {
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada, aberta)
    }

    fechar() {
        const aberta = false
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta)
    }
}
