// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("decimals", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }
}

export class HedgePool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("factory", Value.fromBytes(Bytes.empty()));
    this.set("token0", Value.fromString(""));
    this.set("token1", Value.fromString(""));
    this.set("inputPool", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save HedgePool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save HedgePool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("HedgePool", id.toString(), this);
    }
  }

  static load(id: string): HedgePool | null {
    return changetype<HedgePool | null>(store.get("HedgePool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get factory(): Bytes {
    let value = this.get("factory");
    return value!.toBytes();
  }

  set factory(value: Bytes) {
    this.set("factory", Value.fromBytes(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get inputPool(): Bytes {
    let value = this.get("inputPool");
    return value!.toBytes();
  }

  set inputPool(value: Bytes) {
    this.set("inputPool", Value.fromBytes(value));
  }
}

export class Position extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("txnHash", Value.fromBytes(Bytes.empty()));
    this.set("createdBy", Value.fromBytes(Bytes.empty()));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("lower", Value.fromBigInt(BigInt.zero()));
    this.set("upper", Value.fromBigInt(BigInt.zero()));
    this.set("liquidity", Value.fromBigInt(BigInt.zero()));
    this.set("inToken", Value.fromString(""));
    this.set("outToken", Value.fromString(""));
    this.set("inAmount", Value.fromBigInt(BigInt.zero()));
    this.set("outAmount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Position entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Position entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Position", id.toString(), this);
    }
  }

  static load(id: string): Position | null {
    return changetype<Position | null>(store.get("Position", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get txnHash(): Bytes {
    let value = this.get("txnHash");
    return value!.toBytes();
  }

  set txnHash(value: Bytes) {
    this.set("txnHash", Value.fromBytes(value));
  }

  get createdBy(): Bytes {
    let value = this.get("createdBy");
    return value!.toBytes();
  }

  set createdBy(value: Bytes) {
    this.set("createdBy", Value.fromBytes(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get lower(): BigInt {
    let value = this.get("lower");
    return value!.toBigInt();
  }

  set lower(value: BigInt) {
    this.set("lower", Value.fromBigInt(value));
  }

  get upper(): BigInt {
    let value = this.get("upper");
    return value!.toBigInt();
  }

  set upper(value: BigInt) {
    this.set("upper", Value.fromBigInt(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }

  get inToken(): string {
    let value = this.get("inToken");
    return value!.toString();
  }

  set inToken(value: string) {
    this.set("inToken", Value.fromString(value));
  }

  get outToken(): string {
    let value = this.get("outToken");
    return value!.toString();
  }

  set outToken(value: string) {
    this.set("outToken", Value.fromString(value));
  }

  get inAmount(): BigInt {
    let value = this.get("inAmount");
    return value!.toBigInt();
  }

  set inAmount(value: BigInt) {
    this.set("inAmount", Value.fromBigInt(value));
  }

  get outAmount(): BigInt {
    let value = this.get("outAmount");
    return value!.toBigInt();
  }

  set outAmount(value: BigInt) {
    this.set("outAmount", Value.fromBigInt(value));
  }
}
