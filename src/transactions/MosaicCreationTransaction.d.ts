/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {VerifiableTransaction} from "./VerifiableTransaction";

export declare class MosaicCreationTransaction extends VerifiableTransaction {
}

export declare module MosaicCreationTransaction {
    class Builder {

        addFee(fee): Builder;

        addVersion(version): Builder;

        addType(type): Builder;

        addDeadline(deadline): Builder;

        addDivisibility(divisibility): Builder;

        addSupplyMutable(): Builder;

        addTransferability(): Builder;

        addLevyMutable(): Builder;

        addDuration(duration): Builder;

        addParentId(parentId): Builder;

        addMosaicId(mosaicId): Builder;

        addMosaicName(mosaicName): Builder;

        build(): MosaicCreationTransaction;

    }
}