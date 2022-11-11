import { error } from 'console';
import { redLog } from '../../../developer/debug/colorLog';
import { PrimeConstants } from '../../constants/constants';
import { FileIOClient } from '../clients/_fileIOClient';

export interface ContractDeploymentsKey {
    networkName: string;
    objectName: string;
}

export interface ContractDeploymentsEntry {
    contractName: string;
    contractAddress: string;
    constructorArguments: any[];
    created: Date;
}

export class ContractDeploymentsJson {
    private fileIO: FileIOClient;

    constructor() {
        this.fileIO = new FileIOClient();
    }

    public prepareContractDeploymentsJsonFile() {
        const functionName = 'prepareContractDeploymentsFile';

        const blank = this.fileIO.readFile(PrimeConstants.JSON_BLANK_FILENAME, functionName);

        this.fileIO.overwriteFile(
            PrimeConstants.CONTRACT_DEPLOYMENTS_JSON_FILENAME,
            blank,
            functionName
        );
    }

    public writeContractDeploymentsJsonFile(
        currentNetworkName: string,
        contractName: string,
        objectName: string,
        contractAddress: string,
        constructorArguments: any[]
    ) {
        const functionName = 'writeContractDeploymentsFile';

        console.log(
            `📄 Writing ${currentNetworkName}:${contractName}:${objectName} to contracts deployments file.`
        );

        const spacesPerTab = 4;

        let contractDeploymentsJson = this.fileIO.readFile(
            PrimeConstants.CONTRACT_DEPLOYMENTS_JSON_FILENAME,
            functionName
        );

        let contractDeployments;

        try {
            contractDeployments = JSON.parse(contractDeploymentsJson);
        } catch (error: any) {
            redLog(
                `${functionName}():
                Failed to parse JSON for ${contractName}:${objectName} on ${currentNetworkName.toUpperCase()}: ${contractAddress}`
            );
            throw error;
        }

        if (!contractDeployments[currentNetworkName]) {
            console.log(
                '\n📄 Creating new entry for %s network.\n',
                currentNetworkName
            );
            contractDeployments[currentNetworkName] = {};
        }

        const contractDeploymentsEntry: ContractDeploymentsEntry = {
            contractName,
            contractAddress,
            constructorArguments,
            created: new Date(),
        };

        contractDeployments[currentNetworkName][objectName] =
            contractDeploymentsEntry;

        try {
            contractDeploymentsJson = JSON.stringify(
                contractDeployments,
                null,
                spacesPerTab
            );
        } catch (error: any) {
            redLog(
                `⛔️ ${functionName}():
                Failed to stringify JSON for ${contractName}:${objectName} on ${currentNetworkName.toUpperCase()}: ${contractAddress}`
            );
            throw error;
        }

        this.fileIO.overwriteFile(
            PrimeConstants.CONTRACT_DEPLOYMENTS_JSON_FILENAME,
            contractDeploymentsJson,
            functionName
        );
    }

    public readContractDeploymentsJsonFile(
        key: ContractDeploymentsKey,
        callingFunction: string
    ): ContractDeploymentsEntry {
        const functionName = 'readContractDeploymentsFile';

        console.log(
            `📄 ${callingFunction}(): Reading ${key.networkName}:${key.objectName} from contracts deployments file.`
        );

        const contractDeploymentsJson = this.fileIO.readFile(
            PrimeConstants.CONTRACT_DEPLOYMENTS_JSON_FILENAME,
            functionName
        );

        let contractDeployments;

        try {
            contractDeployments = JSON.parse(contractDeploymentsJson);
        } catch (error: any) {
            redLog(
                `⛔️ ${functionName}():
                Failed to parse JSON ${key.networkName.toUpperCase()}:${key.objectName}.`
            );
            throw error;
        }

        if (!contractDeployments[key.networkName]) {
            redLog(
                `⛔️ ${functionName}():
                Contract deployment does not exist for ${key.networkName.toUpperCase()} network.`
            );
            throw error;
        }

        const contractDeploymentsEntry: ContractDeploymentsEntry =
            contractDeployments[key.networkName][key.objectName];

        return contractDeploymentsEntry;
    }

    public getContractAddress(key: ContractDeploymentsKey): string {
        const contractDeploymentsEntry = this.readContractDeploymentsJsonFile(
            key,
            'getContractAddress'
        );

        return contractDeploymentsEntry.contractAddress;
    }

    public getContractName(key: ContractDeploymentsKey): string {
        const contractDeploymentsEntry = this.readContractDeploymentsJsonFile(
            key,
            'getContractName'
        );

        return contractDeploymentsEntry.contractName;
    }

    public getConstructorArguments(key: ContractDeploymentsKey): any[] {
        const contractDeploymentsEntry = this.readContractDeploymentsJsonFile(
            key,
            'getConstructorArguments'
        );

        return contractDeploymentsEntry.constructorArguments;
    }

    public getCreatedTime(key: ContractDeploymentsKey): string {
        const contractDeploymentsEntry = this.readContractDeploymentsJsonFile(
            key,
            'getCreatedTime'
        );

        return contractDeploymentsEntry.created.toString();
    }
}
