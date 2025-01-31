import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class VersionRepositoryService {
  constructor(@InjectFirebaseAdmin() private readonly fa: FirebaseAdmin) {}

  async getVersion(): Promise<string> {
    const versionsCollection = this.fa.firestore.collection('versions');
    const versions = (await versionsCollection.get()).docs;
    const version = versions[0].data();
    return version.version;
  }
}
